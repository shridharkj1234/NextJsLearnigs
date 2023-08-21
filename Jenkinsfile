pipeline { 
    agent any 
    environment{
        SCANNER_HOME= tool 'sonar-scanner'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                echo 'Build Done'
            }
        }
        stage('Test'){
            steps {
                sh "npm run test"
                echo 'Test Passed'
            }
        }
        stage('Sonarqube') {
            steps {
                withSonarQubeEnv('sonarqube-secret'){
                   sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=NextJsLearnigs \
                   -Dsonar.java.binaries=. \
                   -Dsonar.projectKey=NextJsLearnigs '''
               }
            }
        }
        stage('Deploy') {
            steps {
                script{
                    withDockerRegistry(credentialsId: 'cf8c2925-311e-4021-a59c-0df3eda6bd64') {
                        sh "docker build -t nextjslearnings -f Dockerfile ."
                        sh "docker tag nextjslearnings shridharkj1234/nextjslearnings:latest"
                        sh "docker push shridharkj1234/nextjslearnings:latest"
                    }
                }
            }
        }
        stage('Publish') {
            steps {
                script{
                    withDockerRegistry(credentialsId: 'cf8c2925-311e-4021-a59c-0df3eda6bd64') {
                        sh "docker run -d --name shop-shop -p 8070:8070 shridharkj1234/nextjslearnings:latest"
                    }
                }
            }
        }
    }
}

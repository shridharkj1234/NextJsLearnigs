pipeline { 
    agent any 
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

        stage('SonarQubeAnalysis'){
            steps {
                withSonarQubeEnv('sonar-2') {
     sh "/home/shree/.sonar/sonar-scanner-4.7.0.2747-linux/bin/sonar-scanner \
            -Dsonar.projectKey=jenkins-assignment \
            -Dsonar.sources=. \
            -Dsonar.login=sqp_6ddd86fe07bc5aeb29945d2be6bb083b9f6ec2c3 \
            -Dsonar.host.url=http://127.0.0.1:9099"
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

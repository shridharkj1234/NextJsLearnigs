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
        stage('Deploy') {
            steps {
                script{
                    withDockerRegistry(credentialsId: 'cf8c2925-311e-4021-a59c-0df3eda6bd64') {
                        sh "docker build -t NextJsLearnings -f ."
                        sh "docker tag NextJsLearnings shridharkj1234/NextJsLearnings:latest"
                        sh "docker push shridharkj1234/NextJsLearnings:latest"
                    }
                }
            }
        }
    }
}

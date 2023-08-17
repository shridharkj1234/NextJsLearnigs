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
                echo 'deploy'
            }
        }
    }
}

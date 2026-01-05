pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'develop',
                    url: 'https://github.com/ortab123/simple-devops-pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t registration-app:jenkins .'
            }
        }

        stage('Run Container') {
            steps {
                bat '''
                docker rm -f registration-app || exit /b 0
                docker run -d --name registration-app -p 3000 registration-app:jenkins
                '''
            }
        }
    }
}

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
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t registration-app:jenkins .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 registration-app:jenkins'
            }
        }
    }
}
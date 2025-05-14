pipeline {
    agent any

    environment {
        IMAGE_NAME = "sohel2025/devops-docker-jenkins-project"
        TAG = "latest"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Sohelsh/Web_Project_Devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${TAG}")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub-credentials') {
                        docker.image("${IMAGE_NAME}:${TAG}").push()
                    }
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker stop devops-container || true"
                    sh "docker rm devops-container || true"
                    sh "docker run -d --name devops-container -p 80:80 ${IMAGE_NAME}:${TAG}"
                }
            }
        }
    }
}

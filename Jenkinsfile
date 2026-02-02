pipeline {
    agent any
 
    tools {
        nodejs 'NodeJS'   // You must configure this in Jenkins tools
    }
 
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ranjitkal/Playwright_Project.git'
            }
        }
 
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
            }
        }
 
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
 
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
 

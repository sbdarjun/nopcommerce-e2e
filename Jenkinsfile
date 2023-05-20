pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout git repository'
                git 'https://github.com/sbdarjun/nopcommerce-e2e'
            }
        }

        stage('Install dependencies') {
            steps {
                echo 'Install npm package'
                sh 'npm install'
            }
        }

        stage('Run Cypress tests') {
            steps {
                echo 'Run Cypress Test'
                sh 'npx cypress run'
            }
        }
    }
}

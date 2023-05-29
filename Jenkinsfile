pipeline {
    agent any

    environment {
        GITHUB_URL = 'https://github.com/sbdarjun/'
        GITHUB_PROJECT_NAME = 'nopcommerce-e2e.git'
        GITHUB_CREDENTIALS_ID = '3dd631be-43f4-414b-b63b-96d0cb1521f1'
        BRANCH = 'develop'
    }

    options {
        skipDefaultCheckout() // skips the default 'checkout scm' step
    }

    stages {
        stage('Checkout') {
            when {
                expression {
                    echo "branch ${branch} is ${branch == BRANCH}"
                    return branch == BRANCH
                }
            }
            steps {
                checkout(
                    [$class: 'GitSCM',
                     branches: [[name: BRANCH]],
                     doGenerateSubmoduleConfigurations: false,
                     extensions: [],
                     submoduleCfg: [],
                     userRemoteConfigs: [[
                         url: env.GITHUB_URL + env.GITHUB_PROJECT_NAME,
                         credentialsId: env.GITHUB_CREDENTIALS_ID
                     ]]
                    ]
                )
            }
        }

        stage('Build app(Npm run build)') {
            when {
                expression {
                    return branch == BRANCH
                }
            }
            steps {
                // Run build command
                bat 'npm install'
                bat 'npx cypress run --browser chrome --reporter mochawesome'

                // Check for build error
                script {
                    if (currentBuild.result == 'FAILURE') {
                        error('Build failed')
                    }
                }
            }
        }
        stage('Publish Test Results') {
            steps {
                // Archive Mochawesome report files
                archiveArtifacts '**/mochawesome-report/*.json'

                // Publish JUnit test result reports for Jenkins
                junit '**/cypress/reports/junit/*.xml'
            }
        }
    }
}

pipeline {
	agent any

	stages {
		
		stage ('Checkout SCM') {
			steps {
				checkout scm
			}
		}

		stage ('Build') {
			steps {
				sh 'docker-compose build'
			}
		}
		
		stage ('Test') {
			steps {
				sh 'node test.js'	
			}
		}

		stage ('Deploy') {
			steps {
				echo 'Deploying'
			}
		}

	}

}

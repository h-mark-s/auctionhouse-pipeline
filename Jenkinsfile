pipeline {
	agent any

	stages {
		
		stage ('Build') {
			steps {
				sh 'docker-compose build'
			}
		}
		
		stage ('Test') {
			steps {
				sh 'docker-compose up'
				sh 'node test.js'
				sh 'docker-compose down'
			}
		}

		stage ('Deploy') {
			steps {
				echo 'Deploying'
			}
		}

	}

}

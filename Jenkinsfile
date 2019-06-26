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
				sh 'node test.js'	
				echo 'tests are ok'
				fdsafdsafasdklkhfdsa
			}
		}

		stage ('Deploy') {
			steps {
				echo 'Deploying'
			}
		}

	}

}

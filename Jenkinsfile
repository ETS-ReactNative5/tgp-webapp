pipeline {
  agent any
  tools {
    nodejs "node 12"
  }
  environment {
    DEV_BRANCH            = "develop"
    QA_BRANCH            = "qa"
    PROD_BRANCH           = "master"
    EB_DEV                = "gp-app-dev"
    EB_QA                = "gp-app-qa"
    EB_PROD               = "gp-app-prod"
    EB_TEST               = "tgp-site-test"

  }
  stages {
    // stage('deploy to develop') {
    //   steps {
    //     withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: '	244a4e80-3587-40cb-bcf0-dbe5321fc1bf', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
    //       sh '/var/lib/jenkins/aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID --profile eb-cli-tgp'
    //       sh '/var/lib/jenkins/aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY --profile eb-cli-tgp'
    //       sh '/var/lib/jenkins/eb deploy $EB_ENV'
    //     }
    //   }
    // }
    // stage('setup cypress') {
    //   steps {
    //     sh 'npm install cypress'
    //     sh 'npm install cross-env'
    //   }
    // }


    stage('deploy to EBS') {
      steps {
          script {
            if(env.BRANCH_NAME == PROD_BRANCH) {
            sh '/var/lib/jenkins/eb deploy $EB_PROD'
          } else if(env.BRANCH_NAME == QA_BRANCH) {
            sh '/var/lib/jenkins/eb deploy $EB_QA'
          } else if(env.BRANCH_NAME == DEV_BRANCH) {
            sh '/var/lib/jenkins/eb deploy $EB_DEV'
          } else {
            sh '/var/lib/jenkins/eb deploy $EB_TEST'
          }
        }
      }
    }
    // stage('run cypress test for deployed site') {
    //   steps {
    //       script {
    //         if(env.BRANCH_NAME == PROD_BRANCH) {
    //         sh 'npm run cypress:run:prod'
    //       } else if(env.BRANCH_NAME == DEV_BRANCH) {
    //         sh 'npm run cypress:run:dev'
    //       } else {
    //         sh 'npm run cypress:run:test'
    //       }
    //     }
    //   }
    // }
  }
  post {
    failure {
      script {
        GIT_COMMIT_SHA = sh(returnStdout: true, script: 'git rev-parse HEAD')
        GIT_COMMIT_AUTHOR = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' $GIT_COMMIT_SHA").trim()
        GIT_DESC = sh(returnStdout: true, script: 'git log --format="commit %H%nauthor %an <%aE>%n%n%B" -1').trim()
      }
      slackSend (color: '#ff0000', channel: "bot-deploy", message: "*$JOB_NAME #$BUILD_NUMBER deploy FAILURE!*\n\n```$GIT_DESC```\n:point_right: <$BUILD_URL|$JOB_NAME>")
    }
    success {
      script {
        GIT_COMMIT_SHA = sh(returnStdout: true, script: 'git rev-parse HEAD')
        GIT_COMMIT_AUTHOR = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' $GIT_COMMIT_SHA").trim()
        GIT_DESC = sh(returnStdout: true, script: 'git log --format="commit %H%nauthor %an <%aE>%n%n%B" -1').trim()
      }
      slackSend (color: '#BDFFC3', channel: "bot-deploy", message: "*$JOB_NAME #$BUILD_NUMBER deploy done!*\n\n```$GIT_DESC```\n:point_right: <$BUILD_URL|$JOB_NAME>")
    }
  }
}

export class Controller {

    constructor (currentUser, $translate, FeedbackFactory) {
        this.$translate = $translate;
        this.lang = 'en';
        this.FeedbackFactory = FeedbackFactory;
        console.log('translate', this.$translate);
        currentUser.whenReady().then(() => {
            this.user = currentUser.details;
            
        });

    }
    switchLang (lang) {
        let feedback = this.FeedbackFactory.success('test');
        console.log('translate', this.lang);
        this.$translate.use(lang);
        feedback.api.sendTo('feedbackContainer');
        this.lang = lang;
        
    }

}

Controller.$inject = ['currentUser', '$translate', 'FeedbackFactory'];

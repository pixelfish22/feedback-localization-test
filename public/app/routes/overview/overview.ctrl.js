export class Controller {

    constructor (currentUser, $translate, FeedbackFactory) {
        this.$translate = $translate;
        this.lang = 'en';
        this.FeedbackFactory = FeedbackFactory;
        
        this.user = {name: {first: 'Ken'}};
        

    }
    switchLang (lang) {
        let feedback = this.FeedbackFactory.success('TEST_MESSAGE', {closeable: true, localize: true});
        console.log('translate', this.lang);
        this.$translate.use(lang);
        feedback.api.sendTo('feedbackContainer');
        this.lang = lang;
        
    }

}

Controller.$inject = ['currentUser', '$translate', 'FeedbackFactory'];

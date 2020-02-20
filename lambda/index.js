// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const Util = require('util.js');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = `なぞなぞクイズへようこそ。このスキルではなぞなぞを出しますよ？準備はいいですか？`;
        const reprompt = `始めますか？`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(reprompt)
            .getResponse();
    }
};
const QuizIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuizIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent');
    },
    handle(handlerInput) {
        let speakOutput = '<voice name="Takumi">問題です。';
        // Alexa サウンドライブラリを使う場合
        speakOutput += '<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_bridge_02"/>';
        // 独自のMP3オーディオファイルを使う場合 (事前にS3のMediaフォルダにファイルをアップロードしておきます)
        // const url = Util.getS3PreSignedUrl('Media/question_48k.mp3');
        // speakOutput += `<audio src="${Alexa.escapeXmlCharacters(url)}"/>`;
        speakOutput += `かけたり、たったり、つぶしたりするものって、なーんだ？「アレクサ」と言ってから答えを言ってください。</voice><audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_countdown_loop_32s_full_01"/>`;
        const reprompt = `まだわからないかな？もう一度。`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(reprompt + speakOutput)
            .getResponse();
    }
};

const AnswerIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AnswerIntent';
    },
    handle(handlerInput) {
        const answer = Alexa.getSlotValue(handlerInput.requestEnvelope, 'answer');

        let speakOutput;
        let url;
        if (answer === '時間') {
            // Alexa サウンドライブラリを使う場合
            speakOutput = '<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_01"/>';
            // 独自のMP3オーディオファイルを使う場合 (事前にS3のMediaフォルダにファイルをアップロードしておきます)
            // url = Util.getS3PreSignedUrl('Media/correct_48k.mp3');
            // speakOutput = `<audio src="${Alexa.escapeXmlCharacters(url)}"/>`;
            speakOutput += '正解です。<say-as interpret-as="interjection">やった</say-as>';
        }
        else {
            // Alexa サウンドライブラリを使う場合
            speakOutput = '<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_negative_response_01"/>';
            // 独自のMP3オーディオファイルを使う場合 (事前にS3のMediaフォルダにファイルをアップロードしておきます)
            // url = Util.getS3PreSignedUrl('Media/incorrect_48k.mp3');
            // speakOutput = `<audio src="${Alexa.escapeXmlCharacters(url)}"/>`;
            speakOutput += '残念。答えは<break time="1s"/>時間です';
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = `このスキルではなぞなぞの問題を出します。準備はいいですか？`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent');
    },
    handle(handlerInput) {
        const speakOutput = '良い一日を';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'すみません、理解できませんでした。もう一度言ってください。';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        QuizIntentHandler,
        AnswerIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
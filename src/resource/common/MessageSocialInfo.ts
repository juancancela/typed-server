import Resource from '../../lib/resource/Resource'
import Transformable from '../../lib/repository/Transformable'

export default class MessageSocialInfo implements Transformable<MessageSocialInfo> {

    private likeCounter: number;
    private loveCounter: number;
    private funCounter: number;
    private wowCounter: number;
    private sadCounter: number;
    private angryCounter: number;
    private reportCounter: number;


    /**
     * constructor
     * @param likeCounter # of times message has been marked as like
     * @param loveCounter # of times message has been marked as love
     * @param funCounter # of times message has been marked as fun
     * @param wowCounter # of times message has been marked as wow
     * @param sadCounter # of times message has been marked as sad
     * @param angryCounter # of times message has been marked as angry
     * @param reportCounter # of times message has been reported
     */
    constructor(likeCounter: number, loveCounter: number, funCounter: number, wowCounter: number, sadCounter: number, angryCounter: number, reportCounter: number) {
        this.validate({ likeCounter, loveCounter, funCounter, wowCounter, sadCounter, angryCounter, reportCounter })
        this.likeCounter = likeCounter;
        this.loveCounter = loveCounter;
        this.funCounter = funCounter;
        this.wowCounter = wowCounter;
        this.sadCounter = sadCounter;
        this.angryCounter = angryCounter;
        this.reportCounter = reportCounter;
    }

    transform(obj: any): MessageSocialInfo {
        return MessageSocialInfo.transform(obj)
    }

    static transform(obj: any): MessageSocialInfo {
        return new MessageSocialInfo(
            obj.likecounter, 
            obj.lovecounter, 
            obj.funcounter, 
            obj.wowcounter, 
            obj.sadcounter, 
            obj.angrycounter, 
            obj.reportcounter)
    }

    validate(obj: any) {
        return MessageSocialInfo.validate(obj)
    }

    static validate(obj: any) {
        return
    }

    static getPropertyType(propertyName: string): string {
        switch(propertyName.toLowerCase()) {
            case 'likeCounter': return 'int'
            case 'loveCounter': return 'int'
            case 'funCounter': return 'int'
            case 'wowCounter': return 'int'
            case 'sadCounter': return 'int'
            case 'angryCounter': return 'int'
            case 'reportCounter': return 'int'
        }
    }
}
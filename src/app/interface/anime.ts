export interface Anime {
    id:string;
    title:string; //作品タイトル
    title_short1:string; //略称
    public_url:string; //公式サイト
    sex:number; //0:男性向け 1:女性向け
    twitter_account:string; //Twitterアカウント
    sequel:number; //1以上:続編
}

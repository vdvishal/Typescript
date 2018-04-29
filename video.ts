
class Video{
    ChannelName(): any {
        throw new Error("Method not implemented.");
    }
    constructor(public title: string,public viewsCount?: number, public likesCount?: number,public dislikesCount?: number,public channelName?: string,public description?: string,public category?: string,public topComment?: string){
        this.title = title;
        this.viewsCount = viewsCount;
        this.likesCount = likesCount;
        this.dislikesCount = dislikesCount;
        this.channelName = channelName;
        this.description = description;
        this.category = category;
        this.topComment = topComment;
    }

    getTitle = () => {
        return this.title
    }

    getViewsCount = () => {
        return this.viewsCount
    }

    getLikesCount = () => {
        return this.likesCount
    }

    getDislikesCount = () => {
        return this.dislikesCount
    }

    getChannelName = () => {
        return this.channelName
    }

    getDescription = () => {
        return this.description
    }

    getCategory = () => {
        return this.channelName
    }

    getTopComment = () => {
        return this.topComment
    }
}

let movieTrailer = new Video("Venom",10000,1000,25,"Sony Pictures Entertainment","We Are #Venom. 10.5.18","Entertainment","Awesome")
console.log(movieTrailer.getTitle());
console.log(movieTrailer.getChannelName());
var Video = /** @class */ (function () {
    function Video(title, viewsCount, likesCount, dislikesCount, channelName, description, category, topComment) {
        var _this = this;
        this.title = title;
        this.viewsCount = viewsCount;
        this.likesCount = likesCount;
        this.dislikesCount = dislikesCount;
        this.channelName = channelName;
        this.description = description;
        this.category = category;
        this.topComment = topComment;
        this.getTitle = function () {
            return _this.title;
        };
        this.getViewsCount = function () {
            return _this.viewsCount;
        };
        this.getLikesCount = function () {
            return _this.likesCount;
        };
        this.getDislikesCount = function () {
            return _this.dislikesCount;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getCategory = function () {
            return _this.channelName;
        };
        this.getTopComment = function () {
            return _this.topComment;
        };
        this.title = title;
        this.viewsCount = viewsCount;
        this.likesCount = likesCount;
        this.dislikesCount = dislikesCount;
        this.channelName = channelName;
        this.description = description;
        this.category = category;
        this.topComment = topComment;
    }
    Video.prototype.ChannelName = function () {
        throw new Error("Method not implemented.");
    };
    return Video;
}());
var movieTrailer = new Video("Venom", 10000, 1000, 25, "Sony Pictures Entertainment", "We Are #Venom. 10.5.18", "Entertainment", "Awesome");
console.log(movieTrailer.getTitle());
console.log(movieTrailer.getChannelName());

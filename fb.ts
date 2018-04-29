class Profile{
    constructor(public name?:string,public hometown?:string,public education?:string,public family?:string,public birthday?:string,public age?:number,){
        this.name = name;
        this.hometown = hometown;
        this.education = education;
        this.family = family;
        this.birthday= birthday;
        this.age = age;
    }

    getName = () => {
        return this.name
    }

    getHometown = () => {
        return this.hometown
    }

    getEducation = () => {
        return this.education
    }

    getFamily = () => {
        return this.family
    }

    getBirthday = () => {
        return this.birthday
    }

    getAge = () => {
        return this.age
    }
}

let newUser = new Profile("Mr. Ray","Tez Nagar","Graduate",undefined,undefined,23)
console.log(newUser.getName());
console.log(newUser.getAge());
console.log(newUser.getBirthday());
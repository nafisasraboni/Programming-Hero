function avg(bio, art) {
    let avgerage = (this.bangla + bio + art + this.english + this.math + this.physics) / 6
    console.log(avgerage)
}

let student = {
    name: "Sraboni",
    age: 23,
    bangla: 96,
    english: 99,
    math: 100,
    physics: 95,
}

avg.call(student,94,98);
avg.apply(student,[94,98]);

//bind
// let calMarks = avg.bind(student);
// calMarks(94,98)

avg.bind(student)(94,98)
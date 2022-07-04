class student{
    constructor(id)
    {
        this.id = id;
        this.answers =[];
    }
    addquestion(qid,ans)
    {
        let question = {
            num : qid,
            answer: ans
        }
        this.answers.push(question);
    }
}
class key{
    constructor()
    {
        this.answers = [];
    }
    addans(qid,ans)
    {
        let answer = {
            num : qid,
            answer: ans
        }
        this.answers.push(answer);
    }
    verifyans(qid,ans){
        let fLen = this.answers.length;
        let i = 0;
        for (i=0;i<fLen;i++)
        {
            if (this.answers[i].num == qid)
            {
                if (this.answers[i].answer == ans)
                {
                    return 1;
                }
                else
                {
                    return 0;
                }
            }
        }
        return false;
    }
}
function scorestudent(stud,key)
{
    let l = stud.answers.length;
    let count = 0;
    for (let x=0;x<l;x++){
        count = count + key.verifyans(stud.answers[x].num,stud.answers[x].answer);
    }
    return count;
}
let markkey = new key();
markkey.addans(1,'d');
markkey.addans(2,'a');
markkey.addans(3,'c');
markkey.addans(4,'d');
markkey.addans(5,'b');
markkey.addans(6,'a');
let studList = [];
let stud = new student(6100);
stud.addquestion(1,'d');
stud.addquestion(2,'a');
stud.addquestion(3,'c');
stud.addquestion(4,'d');
stud.addquestion(5,'b');
stud.addquestion(6,'a');
studList.push(stud);
let stud2 = new student(6122);
stud2.addquestion(1,'d');
stud2.addquestion(2,'c');
stud2.addquestion(3,'c');
stud2.addquestion(4,'a');
stud2.addquestion(5,'b');
stud2.addquestion(6,'a');
studList.push(stud2);
let stud3 = new student(6133);
stud3.addquestion(1,'d');
stud3.addquestion(2,'b');
stud3.addquestion(3,'c');
stud3.addquestion(4,'a');
stud3.addquestion(5,'b');
stud3.addquestion(6,'a');

studList.push(stud3);
let total = 0;
let score = 0;
for (let k=0;k<studList.length;k++){
    score = scorestudent(studList[k], markkey)
    total = total + score;
    console.log('score for '+ studList[k].id +' is: '+ score);
}
let avg = total/studList.length;
console.log('average score : '+ avg);



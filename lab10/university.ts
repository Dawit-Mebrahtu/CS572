class University{
    constructor(public name: string, public dept: string){
        this.name = name;
        this.dept = dept;
    }

    graduation(year: number){
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

const mum = new University("MUM", "Computer Science");
mum.graduation(2019);
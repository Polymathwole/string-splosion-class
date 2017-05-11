module.exports= class StringSplosion
{
    constructor(wrd)//constructor
    {
        this.word=wrd;
    }

    manipulate()//function for manipulating string
    {
        let wrd=this.word;
        let howMany=wrd.length;
        let returnString="";

        for(let count=0;count<howMany;++count)
            {
                if (count==0)
                    returnString+=wrd[0];
                else if (count!==howMany-1)
                    for(let cout=0;cout<=count;++cout)
                        returnString+=wrd[cout];
            }

        this.word=returnString+wrd;
        return this.word;
    }
}
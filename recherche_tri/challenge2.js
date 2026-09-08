let notes = [12, 5, 19, 3, 27, 8, 14];
for(i=0;i<notes.length;i++){
    for(j=0;j<notes.length-1-i;j++){
        if(notes[j]>notes[j+1]){
            let temp =notes[j];
            notes[j]=notes[j+1]
            notes[j+1]=temp
        }
    }
}
console.log(notes);

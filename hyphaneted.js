// Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 
// You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
// The input is a string with spaces and title-cased words
// The output is a string with the spaces between words replaced by a hyphen (-)
// The output should be all lower-cased letters
// The output should not have any spaces


function urlSlug(title) {
  const lowerCased = title.toLowerCase(); 
  const splitted = lowerCased.split(" ")
  const joined = splitted.join("-")
//   const hyphen = splitted.map((el) =>{
//     while(el !== splitted[splitted.length-1]){
//         return el + "-";
//     } 
//   })
//   const concatHyphen = hyphen.concat(splitted[splitted.length-1])
//   const joined = concatHyphen.join("")
  console.log(joined)
}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
urlSlug("Winter Is Coming");
urlSlug("Hold The Door")
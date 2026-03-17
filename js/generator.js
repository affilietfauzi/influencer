export function generatePrompt(data){

return {
metadata:{
title:"AI Influencer Scene",
generator:"PRO Builder"
},

video:{
subject:data.influencer,
location:data.location,
pose:data.pose,
animal:data.animal
},

prompt:`Cinematic video of ${data.influencer}. She is ${data.pose} in ${data.location}. There is ${data.animal}. ${data.style}.`
}
}

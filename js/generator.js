export function generatePrompt(data){

return {
metadata:{
title:"AI Influencer Scene PRO",
generator:"Builder v2"
},

video:{
subject:data.influencer,
outfit:`${data.top} and ${data.bottom}`,
location:data.location,
pose:data.pose,
animal:data.animal
},

prompt:`Cinematic video of ${data.influencer} wearing ${data.top} and ${data.bottom}. 
She is ${data.pose} in ${data.location}. 
There is ${data.animal}. 
Highly detailed, photorealistic, influencer lifestyle, 4K, viral social media aesthetic.`
}
}

import { locations } from '../db/locations.js'
import { poses } from '../db/poses.js'
import { animals } from '../db/animals.js'
import { influencers } from '../db/influencers.js'

import { createSelect, randomizeSelects } from './utils.js'
import { generatePrompt } from './generator.js'

const form=document.getElementById('form-container')

// create UI dynamically
form.appendChild(createSelect('influencer','Influencer',influencers))
form.appendChild(createSelect('location','Location',locations))
form.appendChild(createSelect('pose','Pose',poses))
form.appendChild(createSelect('animal','Animal',animals))

// generate
document.getElementById('generateBtn').onclick=()=>{
const data={
influencer:document.getElementById('influencer').value,
location:document.getElementById('location').value,
pose:document.getElementById('pose').value,
animal:document.getElementById('animal').value,
style:"cinematic photorealistic"
}

const result=generatePrompt(data)

document.getElementById('output').value=
JSON.stringify(result,null,2)
}

// random
document.getElementById('randomBtn').onclick=()=>{
randomizeSelects()
}

// copy
document.getElementById('copyBtn').onclick=()=>{
const text=document.getElementById('output')
text.select()
document.execCommand('copy')
alert("Copied!")
}

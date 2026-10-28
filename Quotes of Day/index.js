const Quotes= [ "Discipline is freedom in disguise",

"Small habits decide big futures",

"Consistency beats intensity every time",

"Focus is a superpower in a distracted world",

"Growth begins where comfort ends",

"Dreams demand effort, not excuses",

"Action cures overthinking",

"You become what you repeat",

"Silence often builds louder success",

"Progress is proof of patience",

"Work quietly, let results speak",

"Fear shrinks when faced daily",

"Direction matters more than speed",

"Motivation fades; systems stay",

"Learn to rest, not quit",

"Master basics before chasing hacks",

"Confidence comes from kept promises",

"Results follow responsibility",

"Time reveals true priorities",

"Clarity creates momentum",

"Hard choices make easy lives",

"Easy choices make hard lives",

"Improvement is a daily decision",

"Skills compound like interest",

"Pressure reveals preparation",

"Success loves boring routines",

"Vision without action is illusion",

"Doubt dies through execution",

"Effort never betrays you",

"Today builds tomorrow",

"Comfort delays potential",

"Discipline outlasts motivation",

"Learn fast, apply faster",

"Progress over perfection",

"Your future is watching",

"Focus on what compounds",

"Talent starts; discipline finishes",

"Growth feels uncomfortable by design",

"Clarity beats complexity",

"Direction creates confidence",

"Master yourself first",

"Habits shape identity",

"Action builds belief",

"Effort attracts opportunity",

"Consistency creates trust",

"Learn, unlearn, relearn",

"Excellence is practiced daily",

"Persistence outperforms luck",

"Start before you are ready",

"Momentum loves action",

"The grind teaches patience",

"Focus fuels results",

"Execution beats intention",

"Small wins build empires",

"Discipline sharpens talent",

"Growth requires discomfort",

"Vision demands sacrifice",

"Build skills, not shortcuts",

"Long-term beats short-term",

"Direction over distraction",

"Consistency creates confidence",

"Learn by doing",

"Results reward resilience",

"Focus multiplies effort",

"Build before you broadcast",

"Skill beats luck repeatedly",

"Time favors the consistent",

"Systems beat willpower",

"Progress silences doubt",

"Effort compounds quietly",

"Start small, think long",

"Action clarifies vision",

"Growth demands patience",

"Discipline builds momentum",

"Purpose fuels persistence",

"Improvement is addictive",

"Commitment creates results",

"Focus creates freedom",

"Effort builds identity",

"Progress proves belief",

"Learn deeply, apply simply",

"Consistency creates mastery",

"Hard work compounds silently",

"Discipline defines direction",

"Execution earns confidence",

"Focus beats multitasking",

"Growth requires patience",

"Action builds clarity",

"Skills outlast trends",

"Results reward consistency",

"Daily effort shapes destiny",

"Discipline creates options",

"Focus protects energy",

"Action ends fear",

"Progress demands patience",

"Commitment fuels success",

"Improvement never ends",

"Consistency wins quietly",

"Execution builds belief",

"Start now"];



const button= document.querySelector("button");
const heading=document.querySelector('h1');

button.addEventListener("click",()=>{

    const index=Math.floor(Math.random()*100);

    heading.textContent= Quotes[index];





})
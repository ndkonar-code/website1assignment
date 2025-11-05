const analyzeBtn = document.getElementById("analyzeBtn");
if(analyzeBtn){
  analyzeBtn.addEventListener("click", () => {
    const input = document.getElementById("moodInput").value.toLowerCase();
    const result = document.getElementById("result");
    if(!input) return result.textContent = "Please write how you're feeling.";
    if(input.includes("sad") || input.includes("down") || input.includes("tired")){
      result.textContent = "I'm sensing low energy today 💙 Try breathing exercises and self-care time.";
    } else if(input.includes("happy") || input.includes("excited") || input.includes("good")){
      result.textContent = "You sound positive today ☀️ Keep that energy going!";
    } else {
      result.textContent = "Got it 💭 Remember: every feeling is valid — stay mindful.";
    }
  });
}

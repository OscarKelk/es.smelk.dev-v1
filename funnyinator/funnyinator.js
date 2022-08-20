// Load jQuery
window.onload = function() {
    if (typeof jQuery === "undefined") {
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}
function makeFunny(input_string) {
    $.getJSON("https://raw.githubusercontent.com/ASkiingrock/Funnyinator/main/words.json", function(words) {
        var words_list = Object.keys(words["replacements"]);

        var replaced_string = input_string;
        for (let i = 0; i < words_list.length; i++) {
            replaced_string = replaced_string.toLowerCase();
            var re = new RegExp("\\b" + words_list[i] + "\\b", "gm") // Make regex
            replaced_string = replaced_string.replace(re, words["replacements"][words_list[i]]);
          }

        var output_string = replaced_string.split(" ");
        for (const [word_count, word] of output_string.entries()) {
            if (Math.random() < 0.04 & word.includes("\n") == false) {
                // Annoyingly long bit of code to pick a random item from array
                var rand = Math.random();
                rand *= words["funny_words"].length;
                rand = Math.floor(rand);
                var funny_word = words["funny_words"][rand];
                output_string[word_count] += " " + funny_word;
            }
        }
        document.getElementById('text-entry').value = output_string.join(" ");
});
}
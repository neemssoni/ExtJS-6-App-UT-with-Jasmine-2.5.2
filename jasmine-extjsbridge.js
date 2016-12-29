/**
 * Created by neelam on 12/12/2016.
 */

var TutorialApp = TutorialApp || {};
(function() {
    var specsToRun = [],
        jasmineSpecs = {
            addSpec : function(spec) {
                specsToRun.push(spec);
            },
            hasSpecs : function() {
                return specsToRun.length > 0;
            },
            getSpecs : function() {
                return specsToRun;
            }
        };
    TutorialApp.jasmineSpecs = jasmineSpecs;
})();


(function() {
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    //Init Trackers
    ga('create', 'UA-2438645-20', 'auto', 'oldTracker');
    ga('create', 'UA-106545283-1', 'auto', 'radioTracker');
    //Send PageView
    ga('radioTracker.send', 'pageview', );
    ga('oldTracker.send', 'pageview');
    //Test Data
    ga(function() {
     // console.log(ga.getAll());
    });
})();

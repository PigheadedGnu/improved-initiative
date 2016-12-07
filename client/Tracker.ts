module ImprovedInitiative {
    $(() => {
        RegisterComponents();
        if ($('#tracker').length) {
            var viewModel = new TrackerViewModel();
            ko.applyBindings(viewModel, document.body);
            $.ajax("../statblocks/").done(viewModel.Library.AddStatBlocksFromServer);
            viewModel.ImportEncounterIfAvailable();
        }
        if ($('#playerview').length) {
            var encounterId = $('html')[0].getAttribute('encounterId');
            var playerViewModel = new PlayerViewModel();
            playerViewModel.LoadEncounterFromServer(encounterId);
            ko.applyBindings(playerViewModel, document.body);
        }
        if ($('#landing').length) {
            var launcherViewModel = new LauncherViewModel();
            ko.applyBindings(launcherViewModel, document.body);
        }
    });
    <h1>Hello, world!</h1>,
    document.getElementById('root')
    );
}
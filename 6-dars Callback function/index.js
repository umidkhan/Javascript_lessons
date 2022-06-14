function playFootball(player, callback) {
    console.log(`Name of player ${player}`);
    callback()
}
playFootball('Ronaldo', function () {
    console.log('His shot 100');
})
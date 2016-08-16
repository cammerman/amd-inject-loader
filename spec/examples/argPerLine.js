define(
    'simple/named/module',
    [
        "lodash",
        "other",
        "otherOther"
    ],
    function(
        _,
        other,
        otherOther
    ) {
        _.each( [ 1, 2, 3 ], console.log.bind( console ) );
    });

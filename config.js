var config = {
    address: "localhost", // Address to listen on, can be:
                         // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                         // - another specific IPv4/6 to listen on a specific interface
                         // - "", "0.0.0.0", "::" to listen on any interface
                         // Default, when address config is left out, is "localhost"
    port: 8080,
    ipWhitelist: [
        "127.0.0.1",
        "::ffff:127.0.0.1",
        "::1"
    ], // Set [] to allow all IP addresses
      // or add a specific IPv4 of 192.168.1.5 :
      // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
      // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
      // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"]

    language: "en",
    timeFormat: 24,
    units: "imperial",

    modules: [
        {
            module: "clock",
            position: "top_left",
            config: {
                timeZone: 'America/New_York'
            }
        },
        {
            module: "MMM-kudos",
            position: "middle_center",
            config: {
                hourmap: {
                    5: "morning",
                    11: "lunch",
                    15: "afternoon",
                    19: "evening",
                    23: "night"
                },
                shrinkLimit: 35,
                kudos: {
                    anytime: [
                        ":)",
                        "Love you - Riley",
                        "Hope you are having a great day!"
                    ],
                    morning: [
                        "Choose happiness today!",
                        "Have a wonderful day",
                        "Good morning :)",
                        "You make waking up look effortless"
                    ],
                    lunch: [
                        "You make multitasking look easy",
                        "Your lunch timing is perfect",
                        "Your healthy choices are inspiring"
                    ],
                    afternoon: [
                        "You make the afternoon feel as fresh as the morning",
                        "You're doing great",
                        "Get back to work",
                        "Stop looking at yourself"
                    ],
                    evening: [
                        "You make winding down look effortlessly elegant",
                        "You bring a sense of calm to the evening",
                        "It never hurts to relax",
                        "It's 5 o'clock somewhere",
                        "Your thoughtfulness shines through, even at day's end",
                        "You've handled today's challenges with grace"
                    ],
                    night: [
                        "Noch nicht müde?",
                        "Your presence makes this night magical",
                        "You shine brighter than the stars tonight",
                        "Sleep well!",
                        "Sleep with your angels",
                        "zzzzzzzzzz"
                    ]
                },
                updateInterval: 30000,
                remoteFile: null,
                fadeSpeed: 4000
            }
        },
        {
            module: "MMM-AccuWeatherForecastDeluxe",
            header: "Bars Layout (daily forecast only)",
            position: "top_right",
            classes: "default everyone",
            disabled: false,
            config: {
                apikey: "WeGxg9K4ATy3fa2fg9UV3I9CVQGjrvXl",
                apikey2: "Q2oPkp3iPypaEHhmBRJQSYku9yhzvKYW",
                locationKey: "1122175",
                relativeColors: true,
                showCurrentConditions: false,
                showExtraCurrentConditions: false,
                showSummary: false,
                showForecastTableColumnHeaderIcons: false,
                showHourlyForecast: false,
                dailyForecastLayout: 'bars',
                maxDailiesToShow: 8,
                showPrecipitationProbability: false,
                showPrecipitationSeparator: false,
                showPrecipitationAmount: false,
                showWindSpeed: false,
                showWindDirection: false,
                showWindGust: false,
                iconset: "4c",
                useAnimatedIcons: false,
                label_high: "",
                label_low: ""
            }
        },
        {
            module: "newsfeed",
            position: "bottom_bar"
        },
        {
            module: 'MMM-Fish',
            header: 'Fish of the Day',
            position: 'top_right',
            config: {
                language: 'english'
            }
        },
        {
            module: 'MMM-PenPlotter',
            position: 'top_left',
            config: {
                imagePaths: ['modules/MMM-PenPlotter/example_svg']
            }
        },
        {
            module: 'MMM-GPIO-Notifications',
            config: {
                '7': {
                    delay: 10000,
                    notifications_high: [
                        {
                            notification: 'SCREEN_ON',
                            payload: { 'forced': false }
                        }
                    ]
                }
            }
        },
        {
            module: 'MMM-Screen-Powersave-Notification',
            config: {
                delay: 45
            }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}

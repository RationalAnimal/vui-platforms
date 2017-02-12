/*
MIT License

Copyright (c) 2017 Ilya Shubentsov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
'use strict'
var platforms = {};

platforms.inheritance.BUILT_IN = "BUILT_IN";
platforms.inheritance.NATIVE   = "NATIVE";
platforms.inheritance.EXTENDED = "EXTENDED";

platforms.ALEXA = "Alexa";
platforms.platforms = [platforms.ALEXA];
platforms.inputTypes = [];
platforms.inputTypes[platforms.ALEXA] = [
  {
    "XPlatformInputType": "NUMBER",
    "Mappings": [
      {
        "Language": ["en", "en_uk", "en_us", "de"],
        "IntendedUseLocations": ["*"],
        "PlatformBuiltInInputType": "AMAZON.NUMBER",
        "Inheritance": platforms.inheritance.NATIVE
      }
    ]
  },
  {
    "XPlatformInputType": "NUMBER_FOUR_DIGIT",
    "Mappings": [
      {
        "Language": ["en", "en_uk", "en_us", "de"],
        "IntendedUseLocations": ["*"],
        "PlatformBuiltInInputType": "AMAZON.FOUR_DIGIT_NUMBER",
        "Inheritance": platforms.inheritance.NATIVE
      }
    ]
  },
  {
    "XPlatformInputType": "DATE",
    "Mappings": [
      {
        "Language": ["en", "en_uk", "en_us", "de"],
        "IntendedUseLocations": ["*"],
        "PlatformBuiltInInputType": "AMAZON.DATE",
        "Inheritance": platforms.inheritance.NATIVE
      }
    ]
  },
  {
    "XPlatformInputType": "TIME",
    "Mappings": [
      {
        "Language": ["en", "en_uk", "en_us", "de"],
        "IntendedUseLocations": ["*"],
        "PlatformBuiltInInputType": "AMAZON.TIME",
        "Inheritance": platforms.inheritance.NATIVE
      }
    ]
  },
  {
    "XPlatformInputType": "DURATION",
    "Mappings": [
      {
        "Language": ["en", "en_uk", "en_us", "de"],
        "IntendedUseLocations": ["*"],
        "PlatformBuiltInInputType": "AMAZON.DURATION",
        "Inheritance": platforms.inheritance.NATIVE
      }
    ]
  }
];


module.exports = platforms;

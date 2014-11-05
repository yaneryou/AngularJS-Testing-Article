'use strict'

describe('E2E_protractor Testing',function(){
    describe("/",function(){
        it('should automatically redirect to /videos when location hash/fragment is empty', function() {
            browser.get('/');
            expect(browser.getTitle()).toBe('AngularJS Testing Demo');
            expect(browser.getLocationAbsUrl()).toMatch("/videos");
            element(by.css('.app-youtube-listings')).getWebElement();
        });
    });


    describe('#/videos',function(){
        beforeEach(function() {
            browser.get('#/videos');
        });


        it('should have a working /videos route', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/videos");
        });
    });

    describe('#/watched-videos',function(){
        beforeEach(function() {
            browser.get('#/watched-videos');
        });


        it('should have a working /wathced-videos route', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/watched-videos");
            element(by.css('.app-youtube-listings')).getWebElement();
        });
    });

    describe('#/videos/10',function(){
        beforeEach(function() {
            browser.get('#/videos/10');
        });


        it('should have a working /videos/ID route', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/videos/10");
            element(by.css('.app-youtube-profile')).getWebElement();
        });
    });

    describe('#/something/else',function(){
        beforeEach(function() {
            browser.get('#/something/else');
        });


        it('should redirect back to the index page if anything fails', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/videos");
            element(by.css('.app-youtube-listings')).getWebElement();
        });
    });

    describe('#/videos/zogrnQjHZAM',function(){
        beforeEach(function() {
            browser.get('#/videos/zogrnQjHZAM');
        });


        it('should have a filter that expands the stars properly', function() {
            expect($$('#app-youtube-stars > .app-youtube-star').count()).toBeGreaterThan(0);
        });

        it('should have a working video page controller that applies the video to the scope', function() {
            element(by.css('.app-youtube-embed')).getWebElement();
        });
    });

    describe('#!/videos',function(){
        beforeEach(function() {
            browser.get('#!/videos');
        });


        it('should have a working welcome directive apply it\'s logic to the page', function() {
            expect($('#app-welcome-text div').getText()).toMatch('Welcome');
        });

        it('should have a working youtube listing directive that goes to the right page when clicked', function() {
            $$('.app-youtube-listing').first().click();
            expect(browser.getLocationAbsUrl()).toMatch(/\/videos\/.+/);
        });
    });

    describe('#/other',function(){
        beforeEach(function() {
            browser.get('#/other');
        });


        it('should have a working /other page', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/other");
            //try removing the controller and this will fail
            expect($('#ng-view span').getText()).toMatch('success');
        });
    });


});
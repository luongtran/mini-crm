<?php

class ExtendsController extends \BaseController {
      
    public function geo_ip()
    {
        /*--manual--*/
        /* https://github.com/Torann/laravel-4-geoip
         * at composer :
         * "require-dev": {"torann/geoip": "dev-master"}
         * run command: composer update 
         * at config/app.php:
         * 'providers' => array(       'Torann\GeoIP\GeoIPServiceProvider', )
         * 'aliases' => array(    'GeoIP' => 'Torann\GeoIP\GeoIPFacade',)
         * run command: php artisan config:publish torann/geoip         
         */
        
        $location = GeoIP::getLocation();
        /*ex*/
        $location = GeoIP::getLocation( '232.223.11.11' );
        /*result*/
        /*array (
            "ip"           => "232.223.11.11",
            "isoCode"      => "US",
            "country"      => "United States",
            "city"         => "New Haven",
            "state"        => "CT",
            "postal_code"  => "06510",
            "lat"          => 41.28,
            "lon"          => -72.88
        );
        */
    }
}
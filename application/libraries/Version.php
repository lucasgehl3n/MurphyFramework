<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Version
{
    public function __construct()
    {
        require_once APPPATH.'third_party/version/Version.php';
    }
}

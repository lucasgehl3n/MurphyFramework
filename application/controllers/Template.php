<?php
	defined('BASEPATH') OR exit('No direct script access allowed');

	class Template extends MY_Controller{

		public function __construct(){
			parent::__construct();
			$this->load->helper('url');
			date_default_timezone_set('America/Sao_Paulo');
	  }

		public function index(){
			$this->load->view('header');
			$this->load->view('template');
			$this->load->view('footer', self::$version);
		}

	}
?>

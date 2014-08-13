<?php

class Language extends \Eloquent {
	protected $fillable = ['name','code'];
	protected $table='languages';
}
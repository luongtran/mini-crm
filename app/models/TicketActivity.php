<?php

class TicketActivity extends \Eloquent {

		const create = "Created";
		const update = "Updated";
		const reply = "Replied";
		const close = "Closed";

        protected  $table="ticket_activity";
		protected $fillable = [];
}
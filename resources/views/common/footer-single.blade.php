@if(!request()->is('*messages*'))
<footer id="footer" class="footer__single">
	<div class="l-allWrapper">
		<p class="copyright">@copyright おけい.com 2020</p>
	</div>
</footer>
@endif
<script src="{{ mix('js/app.js') }}"></script>

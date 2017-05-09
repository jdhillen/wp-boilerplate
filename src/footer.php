

		</div>
		<!-- /wrapper -->

		<!-- footer -->
		<footer class="footer" role="contentinfo">

			<div class="container">
				<div class="row">
					<!-- copyright -->
					<div class="copyright">
						&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>. <?php _e('Powered by', 'html5blank'); ?>
						<a href="//wordpress.org">WordPress</a> &amp; <a href="//html5blank.com">HTML5 Blank</a>.
					</div>
					<!-- /copyright -->
				</div>
			</div>

		</footer>
		<!-- /footer -->

		<?php wp_footer(); ?>

		<?php get_template_part( 'template-parts/analytics', 'none' ); ?>

	</body>
</html>

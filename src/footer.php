
		</div>
		<!-- /wrapper -->

		<!-- footer -->
		<footer class="footer" role="contentinfo">

			<div class="container">
				<div class="row">
					<div class="copyright">&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>.</div>
				</div>
			</div>

		</footer>
		<!-- /footer -->

		<?php wp_footer(); ?>

		<?php get_template_part( 'template-parts/analytics', 'none' ); ?>

	</body>
</html>

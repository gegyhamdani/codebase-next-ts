import Button from '@/components/ui/Button';
import { ButtonSize, ButtonVariant } from '@/components/ui/Button/Button';
import Typography from '@/components/ui/Typography';
import { VariantMapping } from '@/components/ui/Typography/Typography';

import styles from './Home.module.scss';

const HomePage = () => (
  <div className={styles.homepage}>
    <div className={styles.homepage__container}>
      <header>
        <Typography variant='h1' color='primary-black'>
          Codebase Showcase
        </Typography>
        <Typography variant='h4' color='primary-black'>
          Explore our Typography and Button components
        </Typography>
      </header>
      <main className={styles.homepage__main}>
        <section className={styles.homepage__main__section}>
          <Typography variant='h3'>Typography Variants</Typography>
          <div>
            {Object.keys(VariantMapping).map((variant) => (
              <div key={variant} className={styles.homepage__main__section__typographyVariants__item}>
                <Typography variant={variant as keyof typeof VariantMapping} color='primary'>
                  This is {variant} text
                </Typography>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.homepage__main__section}>
          <Typography variant='h3'>Button Variants</Typography>
          <div className={styles['homepage__main__section__button-variants__group']}>
            {ButtonVariant.map((variant) =>
              ButtonSize.map((size) => (
                <Button key={`${variant}-${size}`} variant={variant} size={size}>
                  {variant} - {size}
                </Button>
              ))
            )}
          </div>
        </section>
      </main>
      <footer className={styles.homepage__footer}>
        <Typography variant='caption'>
          This is part of a larger codebase project. More components and features coming soon!
        </Typography>
      </footer>
    </div>
  </div>
);

export default HomePage;

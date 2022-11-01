import styles from './styles/post-body.module.css'

export const PostBody = ({ children }) => {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}

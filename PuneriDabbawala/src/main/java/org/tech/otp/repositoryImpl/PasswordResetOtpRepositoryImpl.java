package org.tech.otp.repositoryImpl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.tech.forgotpassword.entity.PasswordResetOtp;
import org.tech.otp.repository.PasswordResetOtpRepository;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public class PasswordResetOtpRepositoryImpl implements PasswordResetOtpRepository {

    @Autowired
    private SessionFactory sessionFactory;
//
//    private Session getSession() {
//        return sessionFactory.getCurrentSession();
//    }

    @Override
    public void save(PasswordResetOtp resetOtp) {

        Session session = null;
        Transaction tx = null;

        try {
            session = sessionFactory.openSession();

            tx = session.beginTransaction();

            session.persist(resetOtp);

            tx.commit();

        } catch (Exception e) {

            if (tx != null) {
                tx.rollback();
            }

            e.printStackTrace();
            throw e;

        } finally {

            if (session != null) {
                session.close();
            }
        }
    }


    @Override
    public PasswordResetOtp findTopByEmailOrderByIdDesc(String email) {

        Session session = null;

        try {
            session = sessionFactory.openSession();

            String hql =
                    "FROM PasswordResetOtp " +
                    "WHERE email = :email " +
                    "ORDER BY id DESC";

            return session
                    .createQuery(hql, PasswordResetOtp.class)
                    .setParameter("email", email)
                    .setMaxResults(1)
                    .uniqueResult();

        } finally {
            if (session != null) {
                session.close();
            }
        }
    }

    @Override
    public void delete(PasswordResetOtp otp) {

        Session session = null;

        try {
            session = sessionFactory.openSession();

            session.remove(otp);

        } finally {
            if (session != null) {
                session.close();
            }
        }
    }

}
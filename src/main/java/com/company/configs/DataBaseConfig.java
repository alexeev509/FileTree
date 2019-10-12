package com.company.configs;

import org.hibernate.jpa.HibernatePersistenceProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(value = "com.company.repository")
@PropertySource(value = {"classpath:/bd.properties","classpath:/hibernate.properties"})
public class DataBaseConfig {
    @Value(("${bd.driver}"))
    private String driver;
    @Value("${bd.url}")
    private String url;
    @Value("${bd.username}")
    private String username;
    @Value("${bd.password}")
    private String password;


    @Value("${hibernate.dialect}")
    private String PROP_HIBERNATE_DIALECT;
    @Value("${hibernate.show_sql}")
    private String PROP_HIBERNATE_SHOW_SQL;
    @Value("${hibernate.entitymanager.packages.to.scan}")
    private String PROP_ENTITYMANAGER_PACKAGES_TO_SCAN;
    @Value("${hibernate.hbm2ddl.auto}")
    private String PROP_HIBERNATE_HBM2DDL_AUTO;

    @Resource
    private Environment env;

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(driver);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        return dataSource;
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactoryBean.setDataSource(dataSource());
        entityManagerFactoryBean.setPersistenceProviderClass(HibernatePersistenceProvider.class);
        entityManagerFactoryBean.setPackagesToScan(PROP_ENTITYMANAGER_PACKAGES_TO_SCAN);

        entityManagerFactoryBean.setJpaProperties(getHibernateProperties());

        return entityManagerFactoryBean;
    }


    private Properties getHibernateProperties() {
        Properties properties = new Properties();
        properties.put("hibernate.dialect", PROP_HIBERNATE_DIALECT);
        properties.put("show_sql", PROP_HIBERNATE_SHOW_SQL);
        properties.put("hibernate.hbm2ddl.auto", PROP_HIBERNATE_HBM2DDL_AUTO);

        return properties;
    }

    @Bean
    public JpaTransactionManager transactionManager() {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());

        return transactionManager;
    }
}

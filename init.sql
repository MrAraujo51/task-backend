-- Adminer 4.8.1 PostgreSQL 13.3 dump

\connect "test";

DROP TABLE IF EXISTS "tasks";
DROP SEQUENCE IF EXISTS tasks_id_seq;
CREATE SEQUENCE tasks_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."tasks" (
    "id" integer DEFAULT nextval('tasks_id_seq') NOT NULL,
    "title" character varying(500) NOT NULL,
    "description" text NOT NULL,
    "status" character varying(50) NOT NULL,
    "creation_date" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "modification_date" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

CREATE FUNCTION trigger_set_timestamp()
    RETURNS TRIGGER AS $$
    BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
    END;
    $$ LANGUAGE 'plpgsql';

CREATE TRIGGER "set_timestamp" BEFORE UPDATE ON "public"."tasks" FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();;


-- 2021-06-14 04:27:11.406353+00